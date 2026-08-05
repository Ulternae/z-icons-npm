import React from 'react';

export interface LanFamilyPantsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFamilyPantsRegular(props: LanFamilyPantsRegularProps): React.ReactElement;
export default LanFamilyPantsRegular;
