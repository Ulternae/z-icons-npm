import React from 'react';

export interface LanTractorRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTractorRegular(props: LanTractorRegularProps): React.ReactElement;
export default LanTractorRegular;
