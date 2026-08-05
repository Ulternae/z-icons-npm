import React from 'react';

export interface LanShredderSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShredderSolid(props: LanShredderSolidProps): React.ReactElement;
export default LanShredderSolid;
