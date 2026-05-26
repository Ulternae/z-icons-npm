import React from 'react';

export interface LanCircleSterlingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleSterlingRegular: React.FC<LanCircleSterlingRegularProps>;
export default LanCircleSterlingRegular;
