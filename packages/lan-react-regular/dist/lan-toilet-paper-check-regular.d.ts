import React from 'react';

export interface LanToiletPaperCheckRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanToiletPaperCheckRegular(props: LanToiletPaperCheckRegularProps): React.ReactElement;
export default LanToiletPaperCheckRegular;
