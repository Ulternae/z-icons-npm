import React from 'react';

export interface NeoPhoneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoPhoneSolid(props: NeoPhoneSolidProps): React.ReactElement;
export default NeoPhoneSolid;
