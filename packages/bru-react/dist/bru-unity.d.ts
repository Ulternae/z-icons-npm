import React from 'react';

export interface BruUnityProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruUnity(props: BruUnityProps): React.ReactElement;
export default BruUnity;
