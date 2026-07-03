import React from 'react';

export interface BruItchIoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruItchIo(props: BruItchIoProps): React.ReactElement;
export default BruItchIo;
