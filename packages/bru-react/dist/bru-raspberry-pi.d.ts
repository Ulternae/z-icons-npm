import React from 'react';

export interface BruRaspberryPiProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruRaspberryPi(props: BruRaspberryPiProps): React.ReactElement;
export default BruRaspberryPi;
