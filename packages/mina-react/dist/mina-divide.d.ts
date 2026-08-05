import React from 'react';

export interface MinaDivideProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaDivide(props: MinaDivideProps): React.ReactElement;
export default MinaDivide;
