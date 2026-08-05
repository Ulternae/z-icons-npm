import React from 'react';

export interface LanBlenderPhoneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBlenderPhoneSolid(props: LanBlenderPhoneSolidProps): React.ReactElement;
export default LanBlenderPhoneSolid;
