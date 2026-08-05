import React from 'react';

export interface LanUniformMartialArtsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUniformMartialArts(props: LanUniformMartialArtsProps): React.ReactElement;
export default LanUniformMartialArts;
