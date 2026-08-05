import React from 'react';

export interface LanWalkieTalkieSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWalkieTalkieSolid(props: LanWalkieTalkieSolidProps): React.ReactElement;
export default LanWalkieTalkieSolid;
