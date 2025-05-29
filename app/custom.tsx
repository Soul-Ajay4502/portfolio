'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Icosahedron } from '@react-three/drei';
import { motion } from 'framer-motion';
import Link from 'next/link';

function SpinningShape() {
    return (
        <Icosahedron args={[1.5, 0]}>
            <meshStandardMaterial color="#4f46e5" wireframe />
        </Icosahedron>
    );
}

export default function Custom404() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-950 text-white px-4">
            <motion.h1
                className="text-6xl font-bold mb-2"
                initial={{ y: -40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
            >
                404
            </motion.h1>

            <motion.p
                className="text-xl mb-6 text-gray-400"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
            >
                Sorry, the page you're looking for does not exist.
            </motion.p>

            <div className="w-72 h-72 mb-6">
                <Canvas camera={{ position: [0, 0, 5] }}>
                    <ambientLight />
                    <directionalLight position={[2, 2, 2]} />
                    <SpinningShape />
                    <OrbitControls enableZoom={false} />
                </Canvas>
            </div>

            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
            >
                <Link
                    href="/"
                    className="bg-white text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-gray-200 transition"
                >
                    Go Back Home
                </Link>
            </motion.div>
        </div>
    );
}
