import React from 'react';

export interface LanWalkieTalkieThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWalkieTalkieThin(props: LanWalkieTalkieThinProps): React.ReactElement;
export default LanWalkieTalkieThin;
