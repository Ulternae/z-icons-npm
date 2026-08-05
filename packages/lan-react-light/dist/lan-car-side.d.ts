import React from 'react';

export interface LanCarSideProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCarSide(props: LanCarSideProps): React.ReactElement;
export default LanCarSide;
