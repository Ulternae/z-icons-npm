import React from 'react';

export interface LanIndentSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanIndentSolid(props: LanIndentSolidProps): React.ReactElement;
export default LanIndentSolid;
