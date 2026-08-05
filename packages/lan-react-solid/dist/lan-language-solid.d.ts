import React from 'react';

export interface LanLanguageSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLanguageSolid(props: LanLanguageSolidProps): React.ReactElement;
export default LanLanguageSolid;
