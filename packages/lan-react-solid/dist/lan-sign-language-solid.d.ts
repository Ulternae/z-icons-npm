import React from 'react';

export interface LanSignLanguageSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSignLanguageSolid(props: LanSignLanguageSolidProps): React.ReactElement;
export default LanSignLanguageSolid;
