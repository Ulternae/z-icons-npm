import React from 'react';

export interface LanPhoneSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPhoneSlash(props: LanPhoneSlashProps): React.ReactElement;
export default LanPhoneSlash;
