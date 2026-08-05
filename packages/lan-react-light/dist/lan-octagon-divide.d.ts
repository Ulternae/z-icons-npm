import React from 'react';

export interface LanOctagonDivideProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanOctagonDivide(props: LanOctagonDivideProps): React.ReactElement;
export default LanOctagonDivide;
