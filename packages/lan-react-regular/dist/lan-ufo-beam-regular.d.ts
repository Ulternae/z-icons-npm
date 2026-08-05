import React from 'react';

export interface LanUfoBeamRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUfoBeamRegular(props: LanUfoBeamRegularProps): React.ReactElement;
export default LanUfoBeamRegular;
