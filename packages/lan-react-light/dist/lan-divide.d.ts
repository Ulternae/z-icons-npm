import React from 'react';

export interface LanDivideProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDivide(props: LanDivideProps): React.ReactElement;
export default LanDivide;
