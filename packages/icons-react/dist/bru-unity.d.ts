import React from 'react';

export interface BruUnityProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruUnity: React.FC<BruUnityProps>;
export default BruUnity;
