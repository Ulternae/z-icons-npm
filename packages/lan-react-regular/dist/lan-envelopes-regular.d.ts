import React from 'react';

export interface LanEnvelopesRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEnvelopesRegular(props: LanEnvelopesRegularProps): React.ReactElement;
export default LanEnvelopesRegular;
