import React from 'react';

export interface CoreEyeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreEye(props: CoreEyeProps): React.ReactElement;
export default CoreEye;
