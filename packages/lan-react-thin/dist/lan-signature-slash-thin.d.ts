import React from 'react';

export interface LanSignatureSlashThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSignatureSlashThin(props: LanSignatureSlashThinProps): React.ReactElement;
export default LanSignatureSlashThin;
