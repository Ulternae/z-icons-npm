import React from 'react';

export interface LanHexagonDivideProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHexagonDivide(props: LanHexagonDivideProps): React.ReactElement;
export default LanHexagonDivide;
