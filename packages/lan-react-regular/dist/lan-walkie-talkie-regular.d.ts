import React from 'react';

export interface LanWalkieTalkieRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWalkieTalkieRegular(props: LanWalkieTalkieRegularProps): React.ReactElement;
export default LanWalkieTalkieRegular;
