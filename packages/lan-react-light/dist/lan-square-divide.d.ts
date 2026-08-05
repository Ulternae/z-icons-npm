import React from 'react';

export interface LanSquareDivideProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareDivide(props: LanSquareDivideProps): React.ReactElement;
export default LanSquareDivide;
