"use client"
import React, {useEffect, useState} from 'react';

import InputNumber from "@/components/mathPower/InputNumber";

const MathPower = () => {
  const [a, setA] = useState<number | null>(null);
  const [b, setB] = useState<number | null>(null);

  const [result, setResult] = useState<number | null>(null);

  useEffect(() => {
    if (a !== null && b !== null) {
      try {
        setResult(a ** b);
      } catch {
        alert("Некоректні вхідні дані, спробуйте ще раз!");
      }
    } else {
      setResult(null);
    }
  }, [a, b]);

  return (
    <div className="min-w-full mt-8 mb-8">
      <div className="flex items-center justify-center">
        <InputNumber value={a} placeholder={'a'} setNumber={setA} classes={`h-[70px] w-[200px] text-2xl`}/>

        <InputNumber value={b} placeholder={'b'} setNumber={setB} classes={`h-[30px] w-[70px] text-sm ml-4 mb-32`}/>

        {result &&
          <>
            <div className={`text-4xl`}>
              =
            </div>

            <div className={`ml-8 text-2xl`}>
              {result.toString()}
            </div>
          </>
        }
      </div>
    </div>
  );
};

export default MathPower;
