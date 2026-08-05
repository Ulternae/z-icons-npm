import React from 'react';

export interface LanUniversalAccessProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUniversalAccess(props: LanUniversalAccessProps): React.ReactElement;
export default LanUniversalAccess;
