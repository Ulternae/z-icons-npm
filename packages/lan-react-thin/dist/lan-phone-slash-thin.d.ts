import React from 'react';

export interface LanPhoneSlashThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPhoneSlashThin(props: LanPhoneSlashThinProps): React.ReactElement;
export default LanPhoneSlashThin;
