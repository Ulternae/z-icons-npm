import React from 'react';

export interface LanSignatureSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSignatureSlash(props: LanSignatureSlashProps): React.ReactElement;
export default LanSignatureSlash;
