import React from 'react';

export interface LanCircleDivideProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleDivide(props: LanCircleDivideProps): React.ReactElement;
export default LanCircleDivide;
