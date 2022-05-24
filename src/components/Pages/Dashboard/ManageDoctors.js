import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeleteConfirmModal from './DeleteConfirmModal';
import DoctorsRow from './DoctorsRow';

const ManageDoctors = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null)
    const {
        data: doctors,
        isLoading,
        refetch,
    } = useQuery("doctors", () =>
        fetch("http://localhost:5000/doctor", {
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        }).then((res) => res.json())
    );
    
    if(isLoading){
        return <Loading />
    }

    return (
        <div>
            <h3>Manage Doctors: {doctors?.length}</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {doctors.map((doctor, index) => (
                            <DoctorsRow
                                setDeletingDoctor={setDeletingDoctor}
                                key={doctor._id}
                                index={index}
                                refetch={refetch}
                                doctor={doctor}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
            {deletingDoctor && (
                <DeleteConfirmModal
                    setDeletingDoctor={setDeletingDoctor}
                    refetch={refetch}
                    deletingDoctor={deletingDoctor}
                />
            )}
        </div>
    );
};

export default ManageDoctors;