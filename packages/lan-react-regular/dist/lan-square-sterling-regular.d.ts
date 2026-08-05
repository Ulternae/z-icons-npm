import React from 'react';

export interface LanSquareSterlingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareSterlingRegular(props: LanSquareSterlingRegularProps): React.ReactElement;
export default LanSquareSterlingRegular;
