import React from 'react';

export interface LanExclamationSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanExclamationSolid(props: LanExclamationSolidProps): React.ReactElement;
export default LanExclamationSolid;
