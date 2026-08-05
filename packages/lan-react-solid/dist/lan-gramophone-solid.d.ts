import React from 'react';

export interface LanGramophoneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGramophoneSolid(props: LanGramophoneSolidProps): React.ReactElement;
export default LanGramophoneSolid;
