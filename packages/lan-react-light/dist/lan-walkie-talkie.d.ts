import React from 'react';

export interface LanWalkieTalkieProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWalkieTalkie(props: LanWalkieTalkieProps): React.ReactElement;
export default LanWalkieTalkie;
