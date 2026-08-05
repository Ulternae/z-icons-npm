import React from 'react';

export interface LanPhoneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPhoneSolid(props: LanPhoneSolidProps): React.ReactElement;
export default LanPhoneSolid;
