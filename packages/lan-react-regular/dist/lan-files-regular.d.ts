import React from 'react';

export interface LanFilesRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFilesRegular(props: LanFilesRegularProps): React.ReactElement;
export default LanFilesRegular;
