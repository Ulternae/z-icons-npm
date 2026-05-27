import React from 'react';

export interface CoreCrownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreCrown: React.FC<CoreCrownProps>;
export default CoreCrown;
