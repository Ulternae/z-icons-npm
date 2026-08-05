import React from 'react';

export interface LanCircleSterlingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleSterlingRegular(props: LanCircleSterlingRegularProps): React.ReactElement;
export default LanCircleSterlingRegular;
