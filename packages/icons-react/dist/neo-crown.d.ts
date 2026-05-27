import React from 'react';

export interface NeoCrownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoCrown: React.FC<NeoCrownProps>;
export default NeoCrown;
