import React from 'react';

export interface LanFileMidiRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileMidiRegular(props: LanFileMidiRegularProps): React.ReactElement;
export default LanFileMidiRegular;
