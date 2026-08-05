import React from 'react';

export interface LanBusSideProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBusSide(props: LanBusSideProps): React.ReactElement;
export default LanBusSide;
