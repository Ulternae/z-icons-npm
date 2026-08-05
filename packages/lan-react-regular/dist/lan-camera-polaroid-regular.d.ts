import React from 'react';

export interface LanCameraPolaroidRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCameraPolaroidRegular(props: LanCameraPolaroidRegularProps): React.ReactElement;
export default LanCameraPolaroidRegular;
