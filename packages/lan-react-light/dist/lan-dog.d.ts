import React from 'react';

export interface LanDogProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDog(props: LanDogProps): React.ReactElement;
export default LanDog;
