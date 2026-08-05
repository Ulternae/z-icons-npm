import React from 'react';

export interface LanSquareCruzeiroRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareCruzeiroRegular(props: LanSquareCruzeiroRegularProps): React.ReactElement;
export default LanSquareCruzeiroRegular;
