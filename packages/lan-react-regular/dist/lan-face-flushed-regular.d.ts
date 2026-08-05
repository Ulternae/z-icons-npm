import React from 'react';

export interface LanFaceFlushedRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceFlushedRegular(props: LanFaceFlushedRegularProps): React.ReactElement;
export default LanFaceFlushedRegular;
