import React from 'react';

export interface CoreGamepadModernProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreGamepadModern(props: CoreGamepadModernProps): React.ReactElement;
export default CoreGamepadModern;
