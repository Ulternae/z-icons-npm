import React from 'react';

export interface CoreGamepadModernSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreGamepadModernSolid(props: CoreGamepadModernSolidProps): React.ReactElement;
export default CoreGamepadModernSolid;
