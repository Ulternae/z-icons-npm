import React from 'react';

export interface LanCircleSterlingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleSterling(props: LanCircleSterlingProps): React.ReactElement;
export default LanCircleSterling;
