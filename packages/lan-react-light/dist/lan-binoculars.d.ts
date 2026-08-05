import React from 'react';

export interface LanBinocularsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBinoculars(props: LanBinocularsProps): React.ReactElement;
export default LanBinoculars;
